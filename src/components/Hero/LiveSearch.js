import React, { useEffect, useState } from 'react';

import { live } from '../../constants/constants';
import { Box, Caption, Field, Form, Input, Label, Message, Result, ResultList, ResultMeta, ResultText, ResultTitle, Select, Submit } from './LiveSearchStyles';

const searchable = (repo) => repo.status === 'searchable' || repo.status === 'searchable_partial';

async function search(repositoryId, query, mode) {
  const body = { repositoryId, query, limit: 3 };
  if (mode) body.mode = mode;
  const res = await fetch(`${live.api}/api/search`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const error = new Error((data && data.message) || `The search failed (${res.status}).`);
    error.status = res.status;
    throw error;
  }
  return data;
}

// A visitor asks a question about one indexed repository and reads the passages
// ContextTrace returns, each linked to its GitHub source. Without script the form
// opens the same search on the ContextTrace demo.
const LiveSearch = () => {
  const [repos, setRepos] = useState([]);
  const [repoId, setRepoId] = useState('');
  const [query, setQuery] = useState('');
  const [state, setState] = useState({ kind: 'idle' });

  useEffect(() => {
    let active = true;
    fetch(`${live.api}/api/repositories`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data) return;
        const list = data.repositories.filter(searchable);
        setRepos(list);
        if (list.length > 0) setRepoId(String(list[0].id));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const repo = repos.find((r) => String(r.id) === repoId);

  const onSubmit = async (event) => {
    // No repository list means the API did not answer; let the form open the demo instead.
    if (!repo) return;
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    setState({ kind: 'loading' });
    try {
      let response;
      let fallback = false;
      try {
        response = await search(repo.id, q);
      } catch (error) {
        if (!(error.status >= 500)) throw error;
        // The semantic index can be paused; keyword search still answers.
        response = await search(repo.id, q, 'keyword');
        fallback = true;
      }
      setState({ kind: 'done', response, fallback });
    } catch (error) {
      setState({ kind: 'error', message: error.message });
    }
  };

  const loading = state.kind === 'loading';

  return (
    <Box data-live data-ui>
      <Form action={`${live.demo}/r/${live.fallbackRepo}`} method="get" onSubmit={onSubmit}>
        <Label htmlFor="live-query">Ask ContextTrace about a repository’s issues and pull requests</Label>
        <Field>
          {repos.length > 0 && (
            <Select aria-label="Repository" value={repoId} onChange={(e) => setRepoId(e.target.value)}>
              {repos.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.full_name}
                </option>
              ))}
            </Select>
          )}
          <Input
            id="live-query"
            name="q"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={live.placeholder}
            autoComplete="off"
            required
          />
          <Submit type="submit" disabled={loading}>
            {loading ? 'Searching' : 'Search'}
          </Submit>
        </Field>
      </Form>

      <div aria-live="polite">
        {state.kind === 'error' && <Message>{state.message}</Message>}
        {state.kind === 'done' && state.fallback && (
          <Message>Keyword matches. The semantic index is paused right now.</Message>
        )}
        {state.kind === 'done' && state.response.results.length === 0 && (
          <Message>{state.response.message || 'No supporting discussion was found for this query.'}</Message>
        )}
        {state.kind === 'done' && state.response.results.length > 0 && (
          <ResultList>
            {state.response.results.map((r) => (
              <Result key={r.passage_id}>
                <ResultTitle href={r.source_url} target="_blank" rel="noopener noreferrer">
                  {r.title} #{r.number}
                </ResultTitle>
                <ResultMeta>
                  {r.locator}
                  {r.author ? `, by ${r.author}` : ''}, {r.match} match
                </ResultMeta>
                <ResultText>{r.excerpt}</ResultText>
              </Result>
            ))}
          </ResultList>
        )}
      </div>

      <Caption>
        {live.caption}{' '}
        <a href={live.evaluation} target="_blank" rel="noopener noreferrer">
          Read the evaluation
        </a>{' '}
        or{' '}
        <a href={live.demo} target="_blank" rel="noopener noreferrer">
          open the full demo
        </a>
        .
      </Caption>
    </Box>
  );
};

export default LiveSearch;
