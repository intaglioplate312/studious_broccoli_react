var React = require("react");

var Results = React.createClass({

    getInitialState: function(){
        return {
            title: "",
            url: "",
            pubdate: ""
        };

    },


    render: function(){

        return(
            <div className = "main-container">

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Rockstar Results</strong></h1>
                                    <h2> {this.props.results} </h2>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Harvey Weinstein Is Fired After Sexual Harassment Reports</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: OCT. 8, 2017</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Cash, T-Shirts and Gallons of Booze: How Liberian Candidates Woo Voters</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: OCT. 8, 2017</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Polish Catholics Gather at Border for Vast Rosary Prayer Event</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published:OCT. 8, 2017</p>


                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Knicks Win Championship</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Mud: The New Superfood?</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

            </div>
        )
    }

});

// Makes the component accessible for export
module.exports = Results;