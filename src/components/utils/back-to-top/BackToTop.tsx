import { Link } from "react-router";

export default function BackToTop(): React.ReactElement { 

    return (<Link to="#" className="btn btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
    ></Link>)
}