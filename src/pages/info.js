import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class Info extends React.Component {
    render() {
        return ( <
            Layout >
                <SEO title="Info" keywords={[`Music`, `Audio tools`, `Sound Design`, `producer`, `composer`, `instrument`]} /> 
                <div className = "site-Info" >
                        <h1>ANDERE SOUND———makes easy to use audio tools for producers, composers, and sound designers.</h1>
                </div>
            </Layout>
        )
    }
}
export default Info
