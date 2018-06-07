import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import setupStore from '../../setupStore';
import App from './App';
import fetchMock from 'fetch-mock';
import Map from '../map/Map';
import Menu from '../menu/Menu';
import Login from '../account/Login';

describe('App integration tests',() => {
    let store;

    beforeEach(() => {        
        store = setupStore();
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('should render Map component',() => {
        const wrapper = mount(<Provider store={store}><App /></Provider>);        
        expect(wrapper.find(Map)).toHaveLength(1);
    });

    it('should render Menu component',() => {
        const wrapper = mount(<Provider store={store}><App /></Provider>);        
        expect(wrapper.find(Menu)).toHaveLength(1);
    });

    // doesn't work
    // it('should navigate to login page on menu click', () =>{
    //     const wrapper = mount(<Provider store={store}><App /></Provider>);        
    //     expect(wrapper.find(Login)).toHaveLength(0);
    //     const loginNode = wrapper.find('a#login');
    //     expect(loginNode).toHaveLength(1);
    //     loginNode.simulate('click');                
    //     expect(wrapper.find(Map)).toHaveLength(1);
    // });
});