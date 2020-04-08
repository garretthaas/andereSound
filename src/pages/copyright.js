import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Copyright extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Copyright" keywords={[`gatsby`, `application`, `react`]} />
                    <div className="container">
                                <p>Copyright © 2020 Andere Sound. All rights reserved.</p>
                    </div>
            </ Layout>
        )
    }
}

export default Copyright
