export const socialLinks = [
  { href: "#", icon: ["fas", "tshirt"] as const, label: "Merchandise" },
  { href: "#", icon: ["fab", "twitter"] as const, label: "Twitter" },
  { href: "#", icon: ["fab", "instagram"] as const, label: "Instagram" },
  { href: "#", icon: ["fab", "facebook-f"] as const, label: "Facebook" },
  { href: "#", icon: ["fab", "tiktok"] as const, label: "TikTok" },
  { href: "#", icon: ["fab", "youtube"] as const, label: "YouTube" },
  { href: "#", icon: ["fab", "spotify"] as const, label: "Spotify" },
  { href: "#", icon: ["fab", "apple"] as const, label: "Apple Music" },
] as const;

export type SocialLink = (typeof socialLinks)[number];
