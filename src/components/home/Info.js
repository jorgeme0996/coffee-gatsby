import React from 'react'
import {Link} from 'gatsby'
import Title from '../global/title'

export default function Info(){
    return(
        <section className="py-5">
            <div className="container">
                <Title title="our story" />
                <div className="row">
                    <div className="col-10 col-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Cras volutpat nunc non augue interdum rutrum. Aenean id mauris est. Suspendisse rhoncus varius leo. Vestibulum sit amet libero dignissim, dictum enim dictum, elementum tellus. Donec vitae aliquam sapien. Aenean sollicitudin lacus vel feugiat blandit. Proin ornare luctus nisl, interdum facilisis nulla hendrerit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod a leo in scelerisque. Pellentesque tempor mauris a pharetra tincidunt. Sed vitae gravida augue. 
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
