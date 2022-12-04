import { Helmet } from "react-helmet"

const SEO = () => {
    return (

        <Helmet title="Blood Lagbe" htmlAttributes={{ lang: "en" }}>
            <meta name="description" content="Blood Lagbe v1.1" />
            <meta property="og:type" content="volunteering,medical" />
            <meta property="og:title" content="Blood Lagbe" />
            <meta property="og:description" content="A new platform for blood donation" />
        </Helmet>
    )
            }
export default SEO;