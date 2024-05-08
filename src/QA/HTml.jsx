

const HTml = () => {
    return (
        <div className=" ml-10 mr-10">
            <div>
                  <h1 className=" text-[#47d4c2] text-center mb-10  text-7xl font-bold ">              
                   <span className=" text-[#FF5733] ">HTML</span> interview Question
                  </h1>
                  <hr></hr>
{/* ------------------------------------------------------- */}
                  
                <div className=" mt-10 mb-10 flex justify-center items-center">


                <div className=" grid  md:grid-cols-2 gap-10">

                 
                <div className="card w-96 bg-[#30bdaa]  shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Question 01 : What are Void elements in HTML?</h2>
                    <p>Answer        :  HTML elements which do not have closing tags or do not need to be closed are
                       Void elements. For example br  , hr , img , input  etc.
                    </p>
                    
                  </div>

                </div>
                <div className="card w-96 bg-[#30bdaa]  shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Question 02 : What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML 
                       elements?
                    </h2>
                    <p>Answer         : Multiple elements in HTML can have the same class value, whereas a value of id 
                       attribute of one element cannot be associated with another HTML element.

                    </p>
                    
                  </div>

                </div>
                <div className="card w-96 bg-[#30bdaa]  shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Question 03 :  Difference between link tag link and anchor tag a </h2>
                    <p>Answer         : The anchor tag a is used to create a hyperlink to another webpage or to a 
                       certain part of the webpage and these links are clickable, whereas, link tag link
                       defines a link between a document and an external resource and these are not     
                       clickable.

                    </p>
                    
                  </div>

                </div>
                <div className="card w-96 bg-[#30bdaa]  shadow-xl">
                  <div className="card-body">
                  <h2 className="card-title">Question 04 : What are tags and attributes in HTML?</h2>
                    <p>Answer         : Tags are the primary component of the HTML that defines how the content will be    
                        structured / formatted. For example, h1, p etc tags. Whereas Attributes are 
                        used along with the HTML tags to define the characteristics of the element. For 
                        example, p align=”center” Interview questions p, in this the ‘align’ is the  
                        attribute using which we will align the paragraph to show in the center of the  
                        view.
                    </p>
                    
                  </div>

                </div>
                <div className="card w-96 bg-[#30bdaa]  shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Question 05 :  What is semantic HTML?
                   
                    </h2>

                    <p>
                    Answer         : Semantic HTML is a coding style. It is the use of HTML markup to reinforce the 
                                           semantics or meaning of the content. For example: In semantic HTML b /b 
                                           tag is not used for bold statements as well as i i tag is used for italic. 
                                           Instead of these we use strong /strong and em /em tags.
                    </p> 
                  </div>

                </div>
  

                </div>



                </div>
              
             



            </div>
            
        </div>
    );
};

export default HTml;