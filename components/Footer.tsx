"use client";
import Image from 'next/image';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface FooterProps {
    brand?: {
        name: string;
        logoSrc?: string;
        href?: string;
    };
    nav?: FooterLink[];
    legal?: FooterLink[];
    socials?: SocialLink[];
    copyrightName?: string;
    className?: string;
}

const defaultSocials: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/Official-Krish', icon: <FaGithub /> },
    { label: 'Twitter', href: 'https://x.com/KrishAnand0103', icon: <FaXTwitter /> },
    { label: 'LinkedIn', href: '#', icon: <FaLinkedin /> }
];

export const Footer: React.FC<FooterProps> = ({
    brand = { name: 'Magic UI', href: '/' },
    nav = [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'About', href: '#' }
    ],
    legal = [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' }
    ],
    socials = defaultSocials,
    copyrightName,
    className = ''
}) => {
    const year = new Date().getFullYear();
    return (
        <footer className={`relative overflow-hidden border-t border-gray-200 bg-white ${className}`}>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_60%)]"
            />
            <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
                <div className="flex flex-col gap-12 md:flex-row md:justify-between">
                    <div className="max-w-sm space-y-6">
                        <a
                            href={brand.href}
                            className="inline-flex items-center gap-3 group"
                            aria-label={brand.name}
                        >
                            <Image src="https://assets.krishdev.xyz/MUI/MUI.jpeg" alt="Logo" width="40" height="40" className="w-7 h-7 mr-2" />
                            <span className="text-xl font-semibold tracking-tight text-gray-900">
                                {brand.name}
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed text-gray-600">
                            Crafting delightful user experiences with clean, accessible components.
                        </p>
                        <div className="flex gap-4">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-gray-300 hover:text-gray-900 hover:shadow md:hover:-translate-y-0.5"
                                >
                                    <span className="text-lg">{s.icon}</span>
                                    <span className="sr-only">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                        <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 md:justify-items-end">
                            <div className="space-y-4">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Explore
                                </h3>
                                <ul className="space-y-3">
                                    {nav.map(link => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
                                                target={link.external ? '_blank' : undefined}
                                                rel={link.external ? 'noopener noreferrer' : undefined}
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-gray-300 opacity-0 transition group-hover:opacity-100" />
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Legal
                                </h3>
                                <ul className="space-y-3">
                                    {legal.map(link => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
                                                target={link.external ? '_blank' : undefined}
                                                rel={link.external ? 'noopener noreferrer' : undefined}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Newsletter
                                </h3>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="space-y-3"
                                >
                                    <div className="group relative">
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-200"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-300 group-focus-within:text-gray-400">
                                            ✉️
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        Subscribe
                                    </button>
                                    <p className="text-xs text-gray-500">
                                        We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="mt-14 border-t border-gray-200 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
                        <p>
                            © {year} {copyrightName || brand.name}. All rights
                            reserved.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                            {legal.map(link => (
                                <a
                                    key={'bottom-' + link.label}
                                    href={link.href}
                                    className="transition hover:text-gray-700"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};