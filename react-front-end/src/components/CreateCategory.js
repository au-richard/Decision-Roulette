// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useState, Component } from "react";
// import { Link } from "react-router-dom";
// import SavedCategory from "./SavedCategory";


// class CreateCategory extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       categoryName: ""
//     }
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     const data = this.state
//     console.log("Data!", data)
//   }

//   handleInputChange = (event) => {
//     event.preventDefault()
//     this.setState({
//       [event.target.name]: event.target.value
//     })

//   }

//   render() {
//     const { categoryName, categoryItem, CategoryItem2, categoryItem3, categoryItem4, categoryItem5, categoryItem6 } = this.state

//     return (
//       <>
//         {/* <h2><font color="azure">Create Category:</font></h2> */}
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Name"
//                 name='categoryName'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput2'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput3'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput4'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput5'
//                 onChange={this.handleInputChange}></input>
//             </p>
//           </form>
//         </div>
//         <div className="new_category">
//           <form onSubmit={this.handleSubmit}>
//             <p>
//               <input
//                 type="text"
//                 placeholder="Category Input"
//                 name='categoryInput6'
//                 onChange={this.handleInputChange}></input>
//             </p>
//             <button className="save_button">SAVE</button>
//             <Link to={{
//               pathname: "/savedcategory",
//               state: this.state
//             }}>
//               SAVE
//             </Link> 
//           </form> 
//         </div>
//       </>
//     )
//   }
// }


// export default CreateCategory;