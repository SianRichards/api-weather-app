import * as React from 'react';
import styles from "./header.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Header extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <header className={styles.header}>
            <h1>Weather around the world</h1>
        </header> );
    }
}
 
export default Header;