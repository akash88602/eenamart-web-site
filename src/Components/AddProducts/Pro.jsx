import React, { useState } from 'react';

const Pro = (props) => {
    const [pro, setpro] = useState([{ cid: 1, name: "soap" }, { cid: 2, name: "Perfume" },{ cid: 2, name: "Test product" }])
    return (
        <>
            {
                pro.map((d, i) => {
                    if (d.cid == props.id) {
                        return (
                            <div>
                                <h1 key={i}>{d.name}</h1>
                            </div>
                        )
                    }
                })
            }
        </>
    );
};

export default Pro;