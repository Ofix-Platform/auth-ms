import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home-container">
			<div className="header-section">
				<h2 className="subtitle">Ofix</h2>
				<div className="divider"></div>
				<p className="subtitle-text">Encuentra rápido</p>
				<p className="subtitle-text">Servicios rápido para tu casa, etc</p>
			</div>

			<SignedOut>
				<div className="auth-container">
					<SignIn
						appearance={{
							elements: {
								rootBox: {
									width: "100%",
								},
								card: {
									boxShadow: "none",
									width: "100%",
									backgroundColor: "transparent",
									border: "none",
								},
								headerTitle: {
									fontSize: "1.25rem",
									fontWeight: "600",
								},
								headerSubtitle: {
									fontSize: "0.875rem",
								},
								socialButtonsBlock: {
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
								},
								formButtonPrimary: {
									backgroundColor: "#4285f4",
									"&:hover": {
										backgroundColor: "#3367d6",
									},
								},
							},
						}}
					/>
				</div>
			</SignedOut>

			<SignedIn>
				<div className="user-section">
					<UserButton afterSwitchSessionUrl="/dashboard" />
					<button
						onClick={() => navigate("/dashboard")}
						className="action-button">
						Ir al Dashboard
					</button>
				</div>
			</SignedIn>
		</div>
	);
}
