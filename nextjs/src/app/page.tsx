import Layout from "../components/layout/Layout";
import About1 from "../components/sections/About1";
import Benefit1 from "../components/sections/Benefit1";
import Blog from "../components/sections/Blog";
// import Event1 from "../components/sections/Event1";
import Form2 from "../components/sections/Form2";
import Partner from "../components/sections/Partner";
import Slider1 from "../components/sections/Slider1";
import Team1 from "../components/sections/Team1";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider1 />
        <Partner />
        <About1 />
        <Benefit1 />
        {/* <Event1 /> */}
        <Team1 />
        <Blog />
        <Form2 />
        <div className="graphic" />
      </Layout>
    </>
  );
}
