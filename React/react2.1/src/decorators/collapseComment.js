import React, {Component as ReactComponent} from 'react'
export default (OriginalComponent) => class CollapseCommentComponent extends ReactComponent {
    state = {
        openArticleId: null
    }
    
    render (){
        return <OriginalComponent { ...this.props } { ...this.state } toggleOpenArticle = { this.toggleOpenArticle }/>
    }

    toggleOpenArticle = (idArticle) => this.setState({
        openArticleId: idArticle == this.state.openArticleId ? null : idArticle
    })
}
