



const ReactJs = () => {
    return (
        <div>
            <div className=" mb-10 mt-10 ml-10 mr-10">
             
             
            <h1 className=" text-[#47d4c2] text-center mb-10  text-7xl font-bold ">              
                  <span className=" text-blue-600">React.js</span> interview Question
                  </h1>
                  <hr></hr>

{/* ----------------------------------------- */}


              <div>

              <div>
              
              
              <p>

                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 01 : What is React?
                         Answer        : React is a front-end JavaScript library used for building single-page applications.
                         </p>
                         <br></br>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 02 : What is JSX?
                         Answer        : JSX stands for JavaScript XML, and it allow us to write HTML-like markup inside a 
                                               JavaScript file.
                        </p>
                                               <br></br>
                        <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">                      
                         Question 03 : What is the State in React?
                         Answer        : State is an object that holds some information that may change over the lifetime of
                                               a component.
                        </p>                       
                                               <br></br>
                        <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">                       
                         Question 04 : What are props in React?
                         Answer        : Props are single values or objects. It is used for passing data from one component 
                                               to another component.
                        </p>                       
                                               <br></br>

                        <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">                       
                         Question 05 : Why should we not update the state directly?
                         Answer        : If we update the state directly then it won’t re-render the component.
                         </p>
                         <br></br>

                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 06 : What is "key" prop and what is the benefit of using it in arrays of elements?
                         Answer        : “key” prop used when we use map method for rendering data. “key” prop helps 
                                               to identify which items have changed, are added, or are removed.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 07 : What is Virtual DOM?
                         Answer        : The Virtual DOM(VDOM) is a concept where an ideal, or ‘virtual’ representation 
                                               of a UI is kept in memory and synced with the "real" DOM. 
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl  text-xl font-bold">
                         Question 08 : How Virtual DOM works?
                         Answer        :  Whenever data changes, the entire UI is re-rendered. Then the difference 
                                                between the previous DOM representation and the new one is calculated. Once 
                                                the calculations are done, the real DOM will be updated with only the things that 
                                                have actually changed.
                                                <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 09 : What are the different phases of the component lifecycle?
                         Answer        :  There are three different phases of the component lifecycle. They are : Mounting, 
                                                Updating, and Unmounting.
                                                <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 10 : What is context?
                         Answer        :  Context provides a way to pass data through the component tree without having
                                                to pass props down manually at every level
                         
                                                <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 11 : What are controlled and uncontrolled components in React?
                         Answer        :  Controlled components are those whose form elements are controlled by React 
                                                state. Uncontrolled components are those where form data is handled by the 
                                                DOM itself.
                                                <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 12 : What are stateful, and stateless components?
                         Answer        :  If the behavior of a component is dependent on the state of the component then it 
                                                can be termed as stateful component, and If the behavior of a component is 
                                                independent of its state then it can be a stateless component.
                                                <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 13 : What is the purpose of the useEffect hook in React? 
                         Answer        :  useEffect is a hook that performs side effects in functional components. 
                         <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 14 : Explain the concept of React Router and its key components.
                         Answer        : React Router is a library for handling navigation in React applications. Key 
                                               components include BrowserRouter, Route, and Link, NavLink.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                            
                         Question 15 : What is Redux, and when would you use it in a React application?
                         Answer        : Redux is a state management library for JavaScript applications. It is used when 
                                               the state of an application becomes complex and needs to be shared among 
                                               multiple components.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 16 : What is the difference between React and ReactDOM?
                         Answer        : React is build for User Interfaces and ReactDOM allows React to interact with the 
                                               DOM.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 17 : Why we cannot update props in React?
                         Answer        : Props should be immutable and top-down.This means that a parent can send any 
                                               prop values to a child, but the child can't modify received props.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 18 : How to handle forms in React? Discuss controlled and uncontrolled 
                                               components in this context.
                         Answer        : In a controlled component, form data is handled by a React component, and 
                                               uncontrolled components are handled by the DOM itself.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 19 : What are hooks in React?
                         Answer        : Hooks allow function components to have access to state and other React 
                                               features.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 20 : Discuss the differences between functional components and class components in 
                                               React.
                         Answer        : Functional components are simpler, stateless, and use hooks. Class components 
                                               have a full lifecycle, can have local state, and use the class syntax.
                                               <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 21 : What is useState in react?
                         Answer        :  useState is React Hook that allows us to add a state variable in our component. It 
                         	           returns an array with two values. The current state and a functional state to 
                         		update it.
                                 <br></br>
                         </p>
                         <p className=" mt-10  bg-[#30bdaa] p-3 rounded-xl text-xl font-bold">
                         Question 22 : What is useMemo in react?
                         Answer        :  useMemo is a React Hook that lets you cache the result of a calculation between 
                         		re-renders.
                                 <br></br>
                         </p>


                        
                       
                        
                        
                         
                         
                         
                        
                        
                         
                         
                         
                         
                        
                        
                        
                         
                         
                         
                         
                         
    
              </p>
              
              
              
              
              
              
              
              
              
              </div>


              </div>   












            </div>
            
        </div>
    );
};

export default ReactJs;