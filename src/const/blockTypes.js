import Header from "../components/Header";
import Posts from "../components/Posts";
import Gallery from "../components/Gallery";
import Form from "../components/Form";
import Footer from "../components/Footer";

export const blockTypes = {
  'HEADER': 'HEADER',
  'POSTS': 'POSTS',
  'GALLERY': 'GALLERY',
  'FORM': 'FORM',
  'FOOTER': 'FOOTER',
}


export const blockTypeToComponent = {
  [blockTypes.HEADER]: Header,
  [blockTypes.POSTS]: Posts,
  [blockTypes.GALLERY]: Gallery,
  [blockTypes.FORM]: Form,
  [blockTypes.FOOTER]: Footer
}
