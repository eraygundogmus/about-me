import React from "react";


const ImageUrls = [
    // {
	    // id: 123
	    // link: "linkl"
    // },
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1601510005861-2d64731dcdad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
]

const Grid = ({ children }) =>
    <div style={styles.grid}>{children}</div>

const WorksPage= () => {

    return (
      <div>
        <div className="Works__me">
        <h1>Works</h1>
        <p>Praesent aliquet varius porta. Aenean ac ante lectus. Aenean nec ligula ac nisl semper vulputate sit amet et dui. Donec congue justo id pharetra eleifend. Donec dolor justo, egestas ut vestibulum vel, sodales et libero. Suspendisse quis risus sit amet sapien eleifend consectetur. Etiam vulputate mollis mi, ac consectetur felis viverra ut. Proin a dictum mauris, ut laoreet purus. Ut id diam nulla. Donec sit amet dignissim lacus. Donec eget neque et tellus efficitur pellentesque. Suspendisse libero nisl, ornare eget tristique et, vehicula a sem. Vivamus condimentum imperdiet interdum.</p>
      </div>

      <Grid>
        { ImageUrls.map(
            i => <img style={{ width: '100%' }} src={i} alt={i} />
        ) }
      </Grid>
    </div>
    )
}

const styles = {
  grid: {
    padding: '30px',
    width: 'calc(100% - 90px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33.3%)',
    gridGap: '30px'
  }
}

export default WorksPage
