import contentDescription from './content-description.json';
import { normalizeContent } from "./utils/contentNormalizer";
import { Container } from "@mui/material";
import ContentRenderer from "./components/ContentRenderer";

function App() {
  return (<>
      <Container maxWidth="lg">
        <ContentRenderer contentData={normalizeContent(contentDescription)}/>
      </Container>
    </>
  )
}

export default App;
