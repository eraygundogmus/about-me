import React from "react";


const ImageUrls = [
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1608739952949-a5219c380afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1608809421615-c5a1a3263893?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    "https://images.unsplash.com/photo-1608768495475-94ab57c46c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1598978483528-fd57466ab0ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
]

const Grid = ({children}) => {
    return (
    <div className="grid-item"> {children} </div>
          )
}

const GridContainer = ({children}) => 

    <div className="grid-container"> {children} </div>




const WorksPage= () => {

    return (
        <div>
        <div className="Works__me">
        <h1>Works</h1>   
        <p>Praesent aliquet varius porta. Aenean ac ante lectus. Aenean nec ligula ac nisl semper vulputate sit amet et dui. Donec congue justo id pharetra eleifend. Donec dolor justo, egestas ut vestibulum vel, sodales et libero. Suspendisse quis risus sit amet sapien eleifend consectetur. Etiam vulputate mollis mi, ac consectetur felis viverra ut. Proin a dictum mauris, ut laoreet purus. Ut id diam nulla. Donec sit amet dignissim lacus. Donec eget neque et tellus efficitur pellentesque. Suspendisse libero nisl, ornare eget tristique et, vehicula a sem. Vivamus condimentum imperdiet interdum.</p>                
   </div>

   <GridContainer>
            
          { ImageUrls.map(i =>  <Grid> <img src={i} alt={i} />  </Grid>) }

    </GridContainer> 

       
    </div>
    )

}

export default WorksPage