import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
padding: 3rem 0;
align-items: stretch;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem;
  padding-bottom: 0;
}

`

export const GridRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .grid-card {
    flex: 1;
    max-width: calc(33.33% - 1rem); /* Ensure equal width for each card */
  }
`;

export const BlogCard = styled.div`
  background: linear-gradient(145deg, ${(props) => props.theme.colors.background2}, ${(props) => props.theme.colors.primary1});
  color: ${(props) => props.theme.colors.background1};
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease;
  margin: 1rem;
  padding: 1rem;

  &:hover {
     background: linear-gradient(145deg, ${(props) => props.theme.colors.accent1}, ${(props) => props.theme.colors.button});
    box-shadow: 0 6px 12px rgba(0,0,0,0.8);
    transform: translateY(-3px); // Slightly less lift
    ${'' /* background: linear-gradient(145deg, ${(props) => props.theme.colors.background2}, ${(props) => props.theme.colors.primary1}); // More subtle gradient */}
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem 0;
  }
`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.accent1};
  padding: 0.5rem 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.button};
  font-weight: bold;
`;


// export const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   color: #e4e6e7;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding:.3rem
  
// }
// `;

export const CardInfo = styled.p`
  color: #e4e6e7;
  font-size: 1.5rem;
  line-height: 1.6;
  padding: 0 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Metric = styled.p`
  display: inline-block;
  margin: 1.5rem 1rem 0;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


// export const HeaderThree = styled.h3`
//   font-weight: 500;
//   letter-spacing: 2px;
//   color: #9cc9e3;
//   padding: .5rem 0;
//   font-size: ${(props) => props.title ? '3rem' : '2rem'};
// `;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;





export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  li {
    display: inline-block;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    i {
      margin-right: 5px;
    }
  }
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #d4c0c0;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

}
`;

export const TagList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 0.8rem 2rem;
padding: 2rem;
`
// export const Tag = styled.li`
// color: #d8bfbf;
// font-size: 1.5rem;
// `

