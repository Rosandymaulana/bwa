import React from 'react';
import { render } from '@testing-library/react' ;
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>)//Descontract

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})


test("Should render loading/spinner", () => {
    const {container , getByText} = render(<Button isLoading></Button>)//Destruct

    expect(getByText(/loading/i)).toBeInTheDocument()//redect case insensitive
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("Should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>)//Descontract

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("Should render <Link> component", () => {
    const {container} = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>
    );//Descontract

    expect(container.querySelector("a")).toBeInTheDocument();
});