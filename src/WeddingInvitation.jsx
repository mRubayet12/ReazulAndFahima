import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Sparkle particle ──────────────────────────────────────────────────────────
function Sparkle({ x, y, delay }) {
	const repeatDelay = 2 + ((x * 13 + y * 7 + delay * 10) % 40) / 10;

	return (
		<motion.div
			className="pointer-events-none absolute"
			style={{ left: `${x}%`, top: `${y}%` }}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180] }}
			transition={{
				duration: 1.8,
				delay,
				repeat: Infinity,
				repeatDelay,
			}}
		>
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
				<path
					d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z"
					fill="#D4AF6A"
					fillOpacity="0.7"
				/>
			</svg>
		</motion.div>
	);
}

// ── SVG floral corner ─────────────────────────────────────────────────────────
function FloralCorner({ className }) {
	return (
		<svg
			className={className}
			width="80"
			height="80"
			viewBox="0 0 80 80"
			fill="none"
		>
			<path
				d="M5 5 Q20 5 20 20"
				stroke="#C9A84C"
				strokeWidth="0.8"
				strokeLinecap="round"
				fill="none"
				opacity="0.6"
			/>
			<path
				d="M5 5 Q5 20 20 20"
				stroke="#C9A84C"
				strokeWidth="0.8"
				strokeLinecap="round"
				fill="none"
				opacity="0.6"
			/>
			<circle cx="20" cy="20" r="2" fill="#C9A84C" opacity="0.5" />
			<path
				d="M5 5 Q12 2 14 10"
				stroke="#C9A84C"
				strokeWidth="0.6"
				fill="none"
				opacity="0.4"
			/>
			<path
				d="M5 5 Q2 12 10 14"
				stroke="#C9A84C"
				strokeWidth="0.6"
				fill="none"
				opacity="0.4"
			/>
			<path
				d="M20 20 Q35 22 38 36"
				stroke="#C9A84C"
				strokeWidth="0.6"
				fill="none"
				opacity="0.35"
			/>
			<path
				d="M20 20 Q22 35 36 38"
				stroke="#C9A84C"
				strokeWidth="0.6"
				fill="none"
				opacity="0.35"
			/>
			<circle cx="10" cy="6" r="1.2" fill="#C9A84C" opacity="0.35" />
			<circle cx="6" cy="10" r="1.2" fill="#C9A84C" opacity="0.35" />
			<circle cx="38" cy="36" r="1.5" fill="#C9A84C" opacity="0.3" />
			<circle cx="36" cy="38" r="1.5" fill="#C9A84C" opacity="0.3" />
		</svg>
	);
}

// ── Gold divider ──────────────────────────────────────────────────────────────
function GoldDivider() {
	return (
		<div className="flex items-center justify-center gap-3 my-3">
			<div
				className="h-px flex-1 max-w-16"
				style={{
					background: "linear-gradient(to right, transparent, #C9A84C)",
				}}
			/>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path
					d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z"
					fill="#C9A84C"
					fillOpacity="0.8"
				/>
			</svg>
			<div
				className="h-px flex-1 max-w-16"
				style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }}
			/>
		</div>
	);
}

// ── Sparkle positions (stable) ────────────────────────────────────────────────
const SPARKLES = [
	{ x: 8, y: 12, delay: 0 },
	{ x: 92, y: 8, delay: 0.7 },
	{ x: 15, y: 85, delay: 1.3 },
	{ x: 87, y: 80, delay: 0.4 },
	{ x: 50, y: 5, delay: 1.8 },
	{ x: 3, y: 50, delay: 2.1 },
	{ x: 96, y: 45, delay: 0.9 },
	{ x: 45, y: 96, delay: 1.5 },
	{ x: 25, y: 40, delay: 2.5 },
	{ x: 75, y: 60, delay: 0.2 },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function WeddingInvitation() {
	const [phase, setPhase] = useState("landing"); // landing | card

	const handleOpen = () => {
		setPhase("card");
	};

	// Google Fonts
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href =
			"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400&display=swap";
		document.head.appendChild(link);
		return () => document.head.removeChild(link);
	}, []);

	return (
		<div
			style={{
				minHeight: "100dvh",
				width: "100%",
				overflowX: "hidden",
				overflowY: "auto",
				background:
					"linear-gradient(145deg, #FAF7F2 0%, #F5EFE6 40%, #EDE3D5 100%)",
				position: "relative",
				fontFamily: "'Jost', sans-serif",
			}}
		>
			{/* Background noise texture */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					zIndex: 0,
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Sparkles */}
			{phase === "landing" &&
				SPARKLES.map((s, i) => <Sparkle key={i} {...s} />)}

			{/* ── LANDING ── */}
			<AnimatePresence>
				{phase === "landing" && (
					<motion.div
						key="landing"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0, scale: 0.97 }}
						transition={{ duration: 0.5 }}
						style={{
							position: "absolute",
							inset: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							zIndex: 10,
						}}
					>
						{/* Ambient ring */}
						<motion.div
							animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.45, 0.25] }}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							style={{
								position: "absolute",
								width: 280,
								height: 280,
								borderRadius: "50%",
								border: "1px solid #C9A84C",
								pointerEvents: "none",
							}}
						/>
						<motion.div
							animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0.4,
							}}
							style={{
								position: "absolute",
								width: 330,
								height: 330,
								borderRadius: "50%",
								border: "0.5px solid #C9A84C",
								pointerEvents: "none",
							}}
						/>

						{/* Couple Names */}
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							style={{
								textAlign: "center",
								marginBottom: 6,
								padding: "0 24px",
							}}
						>
							<div
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "clamp(26px, 7.5vw, 38px)",
									fontWeight: 400,
									fontStyle: "italic",
									color: "#2C2417",
									lineHeight: 1.2,
									letterSpacing: 1,
								}}
							>
								Md Reazul Islam
							</div>
							<div
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "clamp(13px, 3.5vw, 16px)",
									color: "#C9A84C",
									letterSpacing: 6,
									margin: "4px 0",
									fontWeight: 300,
								}}
							>
								&amp;
							</div>
							<div
								style={{
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "clamp(26px, 7.5vw, 38px)",
									fontWeight: 400,
									fontStyle: "italic",
									color: "#2C2417",
									lineHeight: 1.2,
									letterSpacing: 1,
								}}
							>
								Fahima Hossain
							</div>
						</motion.div>

						{/* Subheading */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								marginBottom: 36,
							}}
						>
							<div
								style={{
									width: 32,
									height: "0.5px",
									background: "#C9A84C",
									opacity: 0.7,
								}}
							/>
							<span
								style={{
									fontSize: 10,
									letterSpacing: 3.5,
									color: "#9B8B73",
									fontWeight: 300,
									textTransform: "uppercase",
								}}
							>
								A New Chapter Begins
							</span>
							<div
								style={{
									width: 32,
									height: "0.5px",
									background: "#C9A84C",
									opacity: 0.7,
								}}
							/>
						</motion.div>

						{/* CTA Button */}
						<motion.button
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9, duration: 0.7 }}
							whileTap={{ scale: 0.95, opacity: 0.8 }}
							onClick={handleOpen}
							style={{
								position: "relative",
								padding: "16px 48px",
								background:
									"linear-gradient(135deg, #C9A84C 0%, #E8C96D 50%, #C9A84C 100%)",
								border: "none",
								borderRadius: 50,
								cursor: "pointer",
								boxShadow:
									"0 4px 24px rgba(201,168,76,0.35), 0 1px 6px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
								overflow: "hidden",
							}}
						>
							{/* Shimmer */}
							<motion.div
								animate={{ x: ["-100%", "200%"] }}
								transition={{
									duration: 2.2,
									repeat: Infinity,
									repeatDelay: 1.5,
									ease: "easeInOut",
								}}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "50%",
									height: "100%",
									background:
										"linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
									pointerEvents: "none",
								}}
							/>
							<span
								style={{
									fontFamily: "'Jost', sans-serif",
									fontSize: 13,
									letterSpacing: 4,
									fontWeight: 300,
									color: "#2C1F08",
									textTransform: "uppercase",
								}}
							>
								Save the Date
							</span>
						</motion.button>

						{/* Pulse ring on button */}
						<motion.div
							animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
							transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
							style={{
								position: "absolute",
								width: 180,
								height: 56,
								borderRadius: 50,
								border: "1px solid #C9A84C",
								pointerEvents: "none",
								marginTop: 0,
							}}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── CARD ── */}
			<AnimatePresence>
				{phase === "card" && (
					<motion.div
						className="invitation-card-stage"
						key="card-wrapper"
						initial={false}
						style={{
							position: "relative",
							minHeight: "100dvh",
							display: "flex",
							boxSizing: "border-box",
							zIndex: 20,
							perspective: 1400,
						}}
					>
						<motion.div
							className="invitation-card-shell"
							initial={false}
							animate={{ opacity: 1 }}
							transition={{ duration: 0 }}
							style={{
								width: "var(--invitation-card-width, min(88vw, 380px))",
								transformStyle: "preserve-3d",
								position: "relative",
							}}
						>
							{/* Card */}
							<div
								className="invitation-card"
								style={{
									background:
										"linear-gradient(160deg, #FDFAF5 0%, #F9F4EA 60%, #F2EAD8 100%)",
									borderRadius: 24,
									padding: "var(--invitation-card-padding, 0px 28px 60px)",
									height: "var(--invitation-card-height, auto)",
									boxShadow:
										"0 32px 80px rgba(44,36,23,0.18), 0 8px 24px rgba(44,36,23,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
									border: "1px solid rgba(201,168,76,0.25)",
									position: "relative",
									overflow: "hidden",
									textAlign: "center",
								}}
							>
								{/* Inner border */}
								<div
									style={{
										position: "absolute",
										inset: 10,
										border: "0.5px solid rgba(201,168,76,0.3)",
										borderRadius: 16,
										pointerEvents: "none",
									}}
								/>

								{/* Floral corners */}
								<FloralCorner
									className="absolute"
									style={{ top: 6, left: 6 }}
								/>
								<div
									style={{
										position: "absolute",
										top: 6,
										right: 6,
										transform: "scaleX(-1)",
									}}
								>
									<FloralCorner className="" />
								</div>
								<div
									style={{
										position: "absolute",
										bottom: 6,
										left: 6,
										transform: "scaleY(-1)",
									}}
								>
									<FloralCorner className="" />
								</div>
								<div
									style={{
										position: "absolute",
										bottom: 6,
										right: 6,
										transform: "scale(-1)",
									}}
								>
									<FloralCorner className="" />
								</div>

								{/* Content */}
								<div
									style={{
										position: "relative",
										zIndex: 1,
									}}
								>
									{/* Bismillah Arabic */}
									<motion.div
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontSize: "clamp(18px, 5vw, 22px)",
											color: "#2C1F08",
											marginBottom: 6,
											lineHeight: 1.3,
											fontWeight: 400,
											fontFamily: "serif",
										}}
									>
										بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
									</motion.div>

									{/* Salutation */}
									<motion.p
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontSize: "clamp(6.5px, 1.8vw, 8px)",
											letterSpacing: 2,
											textTransform: "uppercase",
											color: "#9B8B73",
											fontWeight: 300,
											marginBottom: 8,
										}}
									>
										Assalamualaikum Warahmatullahi Wabarakatuh
									</motion.p>

									{/* Host line */}
									<motion.p
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontSize: "clamp(7px, 1.9vw, 8.5px)",
											letterSpacing: 1.5,
											textTransform: "uppercase",
											color: "#6B5B47",
											fontWeight: 300,
											lineHeight: 1.65,
											marginBottom: 10,
										}}
									>
										We,{" "}
										<strong style={{ fontWeight: 600 }}>
											Md Rafiqul Islam &amp; Mst Khadiza Akter
										</strong>
										,<br />
										cordially request your presence at the
										<br />
										Reception Ceremony of our eldest son
									</motion.p>

									{/* Groom Name */}
									<motion.h1
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "clamp(26px, 7.5vw, 34px)",
											fontWeight: 400,
											fontStyle: "italic",
											color: "#2C1F08",
											lineHeight: 1.1,
											letterSpacing: 0.5,
											marginBottom: 2,
										}}
									>
										Md Reazul Islam
									</motion.h1>

									<motion.div
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "clamp(20px, 5.5vw, 26px)",
											letterSpacing: 6,
											color: "#C9A84C",
											fontWeight: 300,
											textAlign: "center",
											margin: "20px 0",
											display: "block",
										}}
									>
										&amp;
									</motion.div>

									{/* Bride Name */}
									<motion.h1
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontFamily: "'Cormorant Garamond', serif",
											fontSize: "clamp(26px, 7.5vw, 34px)",
											fontWeight: 400,
											fontStyle: "italic",
											color: "#2C1F08",
											lineHeight: 1.1,
											letterSpacing: 0.5,
											marginBottom: 6,
										}}
									>
										Fahima Hossain
									</motion.h1>

									{/* Bride's parents */}
									<motion.p
										initial={false}
										animate={{ opacity: 1 }}
										style={{
											fontSize: "clamp(6.5px, 1.8vw, 8px)",
											letterSpacing: 1.5,
											textTransform: "uppercase",
											color: "#9B8B73",
											fontWeight: 300,
											lineHeight: 1.65,
											marginBottom: 10,
										}}
									>
										Youngest Daughter of
										<br />
										<strong style={{ fontWeight: 600, color: "#6B5B47" }}>
											Mohammed Altaf Hossain Salim &amp; Nazma Akter
										</strong>
									</motion.p>

									<GoldDivider />

									{/* Date block */}
									<motion.div
										initial={false}
										animate={{ opacity: 1 }}
										style={{ marginBottom: 8 }}
									>
										<div
											style={{
												fontSize: 9,
												letterSpacing: 4,
												textTransform: "uppercase",
												color: "#5C4E3A",
												fontWeight: 400,
												marginBottom: 4,
											}}
										>
											June
										</div>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												gap: 14,
											}}
										>
											<div style={{ textAlign: "right" }}>
												<div
													style={{
														width: 44,
														height: "0.5px",
														background: "#7A6A55",
														opacity: 0.6,
														marginBottom: 3,
													}}
												/>
												<span
													style={{
														fontSize: 8,
														letterSpacing: 2.5,
														textTransform: "uppercase",
														color: "#5C4E3A",
														fontWeight: 400,
													}}
												>
													Monday
												</span>
											</div>
											<div
												style={{
													fontFamily: "'Cormorant Garamond', serif",
													fontSize: "clamp(36px, 10vw, 48px)",
													fontWeight: 300,
													color: "#2C1F08",
													lineHeight: 0.95,
													letterSpacing: -1,
												}}
											>
												29
												<br />
												<span
													style={{
														fontSize: "clamp(11px, 3vw, 13px)",
														letterSpacing: 2,
														fontWeight: 300,
														fontStyle: "normal",
													}}
												>
													2026
												</span>
											</div>
											<div style={{ textAlign: "left" }}>
												<div
													style={{
														width: 44,
														height: "0.5px",
														background: "#7A6A55",
														opacity: 0.6,
														marginBottom: 3,
													}}
												/>
												<span
													style={{
														fontSize: 8,
														letterSpacing: 2.5,
														textTransform: "uppercase",
														color: "#5C4E3A",
														fontWeight: 400,
													}}
												>
													7:00 PM
												</span>
											</div>
										</div>
									</motion.div>

									<GoldDivider />

									{/* Venue */}
									<motion.div
										initial={false}
										animate={{ opacity: 1 }}
									>
										<p
											style={{
												fontSize: "clamp(8.5px, 2.3vw, 10px)",
												letterSpacing: 2,
												textTransform: "uppercase",
												fontWeight: 600,
												color: "#2C1F08",
												marginBottom: 3,
											}}
										>
											Venue: Gulshan Shooting Club
										</p>
										<p
											style={{
												fontSize: "clamp(7.5px, 2vw, 9px)",
												letterSpacing: 1.5,
												color: "#9B8B73",
												fontWeight: 300,
												textTransform: "uppercase",
												lineHeight: 1.7,
											}}
										>
											Gulshan Avenue, Beside Police Plaza,
											<br />
											Dhaka-1212
										</p>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
