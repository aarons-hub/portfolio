import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./custom.css";
import { WorkCategory } from "./components/WorkCategory";
import { Home } from "./components/Home";
import { CategoryDetails } from "./components/CategoryDetails";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { WorkPanel } from "./components/WorkPanel";
import { Tools } from "./components/Tools";
import { WorkLandingPage } from "./components/WorkLandingPage";
import Moment from "moment";

const root = ReactDOM.createRoot(document.getElementById("root"));

const formatDate = Moment().format("hh:mm A");
const formatCopyright = Moment().format("YYYY");

root.render(
  <>
    <div className="custom-container">
      <div className="custom-inner-container">
        <div className="custom-inner">
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:cat" element={<WorkCategory />} />
              <Route
                path="/categorydetails/:id"
                element={<CategoryDetails />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/workpanel" element={<WorkPanel />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/worklandingpage" element={<WorkLandingPage />} />
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
    <div className="date-copyright">
      <div className="col">
        <div className="date bne-date">{formatDate}</div>
      </div>
      <div className="col">
        <div className="copyright-contents">ⓒ{formatCopyright}</div>
      </div>
    </div>
  </>
);
