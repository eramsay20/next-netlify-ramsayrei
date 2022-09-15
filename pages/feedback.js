// https://getbootstrap.com/docs/5.0/layout/grid/

const Feedback = props => {
    return (
        <div style={{padding: 50}}>
            <h1>Feedback Page</h1>
            <div className="container col-12">
                <div className="row w-100 h-100 no-gap">
                    <div className="col">
                        <div className="d-flex justify-content-center h-100 w-100 align-items-center bg-dark text-white">
                            Content A
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="d-flex justify-content-center h-100 w-100 align-items-center bg-dark text-white">
                            Content B
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="d-flex justify-content-center h-100 w-100 align-items-center bg-dark text-white">
                            Content C
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback