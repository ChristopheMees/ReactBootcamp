import React from 'react'

export default class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {error: false}
    }

    static getDerivedStateFromError()
    {
        return {error: true}
    }

    componentDidCatch(error)
    {
        console.error(error)
    }

    render()
    {
        if(this.state.error)
            return <p>Something broke</p>

        return  <div>
                    { this.props.children }
                </div>
    }
}