import React from 'react';
import '../css/Footer.css'


export default function Footer() {

    return(
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>StreamBoat Inc</h4>
                        <ul className="list-unstyled">
                            <li>https://github.com/EpicGibbon</li>
                            <li>https://github.com/CameronG88</li>
                            <li>V1.0</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Follow us!</h4>
                        <ul className="list-unstyled">
                            <li>Twitter @ StreamBoat</li>
                            <li>Spotify @ StreamBoat Playlist</li>
                            <li>Instagram @ StreamBoat</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li>W3Schools</li>
                            <li>MDN Docs</li>
                            <li>UCF Coding Bootcamp</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} STREAMBOAT INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </footer>
    );
}