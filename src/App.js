import "./App.css";
import { FacebookIcon, InstagramIcon } from "./icons";

function App() {
    const openURLInNewWindow = (url) => () => {
        if (url) window.open(url, "_blank");
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1590518578533-112fcf0905e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    backdropFilter: "blur(2px)",
                }}
            >
                <div
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginBottom: 8,
                    }}
                >
                    TravelTroopers.Travel
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginBottom: 18,
                    }}
                >
                    <div>
                        In the world full of Wanderers, Be a Travel Inspiration.
                    </div>
                    <div>Travel with a purpose, with Travel Troopers!</div>
                    <div>Discover Rajasthan, Uttrakhand and Himachal.</div>
                </div>
                <div style={{ marginBottom: 24 }}>
                    <button
                        style={{
                            border: "none",
                            background: "#FFFFFF",
                            fontWeight: "bold",
                            fontSize: 18,
                            marginBottom: 14,
                            padding: "8px 16px",
                            borderRadius: 18,
                        }}
                        onClick={openURLInNewWindow(
                            "https://forms.gle/6znys7ZFVPioRsjT7"
                        )}
                    >
                        Send Enquiry
                    </button>
                </div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{ height: 48, width: 48, marginRight: 8 }}
                        onClick={openURLInNewWindow(
                            "https://www.facebook.com/TravelTroopers.Travel"
                        )}
                    >
                        <FacebookIcon />
                    </div>
                    <div
                        style={{ height: 48, width: 48, marginRight: 8 }}
                        onClick={openURLInNewWindow(
                            "https://www.instagram.com/traveltroopers.travel/"
                        )}
                    >
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
