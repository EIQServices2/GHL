export interface FooterProduct {
  label: string;
  href: string;
}

export interface FooterLink {
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface AuthConfig {
  apiBase: string;
  cognitoUserPoolId: string;
  cognitoWebClientId: string;
  cognitoRegion: string;
}
