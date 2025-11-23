import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            <div className='h-full'>
                <div className="grid md:grid-cols-2 gap-5 h=[711] w=[1170]">
                    <div className='-mt-16 '>
                        <img src='/src/assets/011.png' className='m-20 rounded-2xl h-2/3 border' />
                    </div>
                    <div className='m-10 md:m-2'>
                        <h3 className='card-title'>H & S Anti-Hairfall Shampoo-340</h3>
                        <p className='mt-3 mb-3 font-medium card-title'>990৳ </p>
                        <hr />

                        <p className='mt-3 mb-3 card-title'>
                            <span className='font-bold'> SKU: 5199</span>
                        </p>
                        <p className='mt-5 mb- card-title'>
                            <span className=' '>Categories: Beauty & Health</span>



                        </p>
                        <hr /><br />
                        <span className='space-y-2 mb-10'>
                            <p>
                                <form className="filter">
                                    <input className="btn btn-square" type="reset" value="1" />


                                    <input className="btn" type="radio" name="frameworks" value={0} />
                                    <input className="btn btn-square" type="reset" value="2" />
                                </form>





                            </p>



                        </span> <br /><br />
                        <span className='space-x-5 '>
                            <div className="card-actions justify-between">
                                <button className="btn btn-outline ">ADD TO CART </button>
                                <button className=" btn  btn-error ">BUY NOW</button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;