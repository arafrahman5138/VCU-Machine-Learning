import styled from 'styled-components'

export const ColoredBackground = styled.div`
  height: 300px;
  background: linear-gradient(123deg, #ffffff 0%, #F26D26 100%),
    linear-gradient(236deg, #baff99 0%, #F99D3A 100%),
    linear-gradient(180deg, #ffffff 0%, #002a5a 100%),
    linear-gradient(
      225deg,
      #1C9CD3 20%,
      #F99D3A 45%,
      #85C55A 45%,
      #85C55A 70%,
      #F99D3A 70%,
      #7ED2EF 85%,
      #F4ED9F 85%,
      #F4ED9F 100%
    ),
    linear-gradient(
      135deg,
      #1C9CD3 15%,
      #1C9CD3 35%,
      #F26D26 35%,
      #F26D26 60%,
      #1C9CD3 60%,
      #1C9CD3 68%,
      #F26D26 68%,
      #F26D26 100%
    );
  background-blend-mode: overlay, overlay, overlay, darken, normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -100px;
  h1 {
    color: #fff;
    font-size: 60px;
  }
`
// linear-gradient(
//   225deg,
//   #0094ff 20%,
//   #bff4ed 45%,
//   #280f34 45%,
//   #280f34 70%,
//   #ff004e 70%,
//   #e41655 85%,
//   #b30753 85%,
//   #b30753 100%
// ),