import {
  Loader2,
  type LightbulbIcon as LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type LucideIcon,
  Camera,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  spinner: Loader2,
  camera: Camera,
  demo: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  phantom: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0z" fill="#AB9FF2" />
      <path
        d="M23.392 10.5H8.608c-.992 0-1.796.834-1.796 1.865v5.269c0 1.031.804 1.866 1.796 1.866h5.23v1.143a.703.703 0 01-.692.713h-2.08a.703.703 0 01-.691-.713v-.356a.366.366 0 00-.359-.373h-1.15a.366.366 0 00-.358.373v.356c0 1.375 1.088 2.491 2.429 2.491h2.08c1.34 0 2.428-1.116 2.428-2.491V19.5h7.947c.992 0 1.796-.835 1.796-1.866v-5.269c0-1.031-.804-1.865-1.796-1.865z"
        fill="#FFF"
      />
    </svg>
  ),
  solflare: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#FC9965" />
      <path
        d="M22.5 16.5h-9.37l4.69-8.11 4.68 8.11zm-13.12 0h4.68l-4.68 8.11 4.68-8.11zm0 0h-3.13l3.13-5.41 3.12 5.41h-6.25z"
        fill="#FFF"
      />
    </svg>
  ),
  metamask: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M27.2 2l-9.404 7.001 1.738-4.135L27.2 2z"
        fill="#E2761B"
        stroke="#E2761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 2l9.319 7.086-1.653-4.22L4.8 2zM23.53 21.57l-2.949 4.525 6.319 1.738 1.823-6.178-5.193-.085zM3.314 21.655l1.823 6.178 6.32-1.738-2.95-4.525-5.193.085z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.118 14.395l-1.483 2.27 5.277.254-.17-5.703-3.624 3.18zM20.882 14.395l-3.666-3.265-.17 5.788 5.32-.254-1.484-2.27zM11.457 26.095l3.18-1.568-2.738-2.143-.442 3.71zM17.363 24.527l3.18 1.568-.442-3.71-2.738 2.142z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.543 26.095l-3.18-1.568.254 2.1-.042 1.06 2.968-1.592zM11.457 26.095l2.967 1.592-.042-1.06.254-2.1-3.18 1.568z"
        fill="#D7C1B3"
        stroke="#D7C1B3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.467 20.17l-2.652-.763 1.865-.848.787 1.61zM17.533 20.17l.787-1.611 1.865.848-2.652.763z"
        fill="#233447"
        stroke="#233447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.457 26.095l.467-4.525-3.417.085 2.95 4.44zM20.076 21.57l.467 4.525 2.95-4.44-3.417-.085zM22.366 16.665l-5.32.254.509 2.737.787-1.61 1.865.847 2.16-2.228zM11.815 19.407l1.865-.848.787 1.61.509-2.736-5.32-.254 2.16 2.228z"
        fill="#CD6116"
        stroke="#CD6116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.656 16.665l2.245 4.356-.085-2.143-2.16-2.213zM20.205 18.878l-.085 2.143 2.246-4.356-2.16 2.213zM14.976 16.919l-.509 2.737.636 3.265.17-4.313-.297-1.689zM17.024 16.919l-.297 1.689.17 4.313.636-3.265-.509-2.737z"
        fill="#E4751F"
        stroke="#E4751F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.533 20.17l-.636 3.265.467.339 2.738-2.143.085-2.143-2.654.682zM11.815 19.407l.085 2.143 2.738 2.143.467-.339-.636-3.265-2.654-.682z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.575 27.687l.042-1.06-.212-.17h-2.81l-.212.17.042 1.06-2.968-1.592 1.06.848 2.1 1.483h2.77l2.1-1.483 1.06-.848-2.922 1.592z"
        fill="#C0AD9E"
        stroke="#C0AD9E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.363 24.527l-.467-.339h-1.792l-.467.339-.254 2.1.212-.17h2.81l.212.17-.254-2.1z"
        fill="#161616"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.71 11.09l.89-4.313-1.4-4.777-9.828 7.299 3.793 3.2 5.363 1.568 1.187-1.399-.509-.339.806-.763-.636-.509.806-.594-.467-.339zM3.4 6.777l.89 4.313-.551.424.806.594-.636.509.806.763-.509.339 1.187 1.399 5.363-1.568 3.793-3.2-9.828-7.3-1.32 4.727z"
        fill="#763D16"
        stroke="#763D16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.528 13.067l-5.363-1.568 1.653 2.483-2.246 4.356 2.949-.042h4.44l-1.433-5.23zM10.835 11.499l-5.363 1.568-1.433 5.23h4.44l2.949.042-2.246-4.356 1.653-2.483zM17.024 16.919l.339-5.788 1.568-4.228h-5.852l1.568 4.228.339 5.788.17 1.689v4.313h1.698v-4.313l.17-1.689z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}
