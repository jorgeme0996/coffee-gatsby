import React, {Component} from 'react'
import Title from '../global/title'
import Img from 'gatsby-image'

const getCategories = items =>{
    let tempItems = items.map(item=>{
        return item.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ['all', ...categories]
    return categories
}

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: props.items.edges,
            coffeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = (category) =>{
        let tempItems = [...this.state.items]
        if(category === 'all') {
            this.setState(()=>{
                return {coffeItems:tempItems}
            })
        } else {
            let items = tempItems.filter(({node})=>node.category === category)
            this.setState(()=>{
                return {coffeItems: items}
            })
        }
    }
    render() {
        if(this.state.items.length>0){
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index)=>{
                                    return(
                                        <button onClick={() => {this.handleItems(category)}} key={index} className="btn btn-yellow text-capitalize m-3">{category}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="row">
                            {this.state.coffeItems.map(({node})=>{
                                return(
                                    <div className="col-11 col-md-6 my-3 d-flex mx-auto" key={node.id}>
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0 text-capitalize">{node.title}</h6>
                                                <h6 className="mb-0 text-yellow"><small>$</small> {node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
        } else {
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h2>No items to display</h2>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }


}