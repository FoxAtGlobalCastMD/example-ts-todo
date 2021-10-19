import styled from "styled-components";
import TodoForm from "./components/TodoForm";

//all the fetch logic in here
// DOING THIS THING: https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react

function App() {
  return (
    <Wrapper>
      <TodoForm></TodoForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10px;
  background: #f3f4f6;
`;

export default App;
