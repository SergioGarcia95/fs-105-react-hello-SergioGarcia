
import React from "react";



export const Card = () => {

    return (

            <div className="container-fluid py-5">
            <div className="card mx-auto" style={{ maxWidth: '800px' }}>
                <img
                src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
                className="card-img-top"
                style={{ width: "100%", height: "auto" }}
                alt="Paisaje"
                />
                <div className="card-body text-start">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate error rerum eos tenetur perspiciatis optio eveniet ad est, veritatis dolor vitae tempore veniam aperiam. Quod deserunt tenetur voluptatibus facere.
                </p>
                <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            </div>

    )
}

