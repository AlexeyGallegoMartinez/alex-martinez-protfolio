"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { fallbackLng, languages } from "@/app/i18n/settings";
import { Container } from "@/components/ui/container";
import { getShellCopy, getThemeToggleLabel } from "@/lib/shell-copy";
import avatarImage from "@/public/images/avatar.jpeg";

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getCurrentLocale(pathname) {
  let maybeLocale = pathname?.split("/")[1];

  return languages.includes(maybeLocale) ? maybeLocale : fallbackLng;
}

function isRouteActive(pathname, href, exact = false) {
  if (!pathname) {
    return false;
  }

  if (exact) {
    return pathname === href || pathname === `${href}/`;
  }

  return (
    pathname === href ||
    pathname === `${href}/` ||
    pathname.startsWith(`${href}/`)
  );
}

function getNavItems(locale) {
  let labels = getShellCopy(locale).nav;
  let root = `/${locale}`;

  return [
    { href: root, label: labels.home, exact: true },
    { href: `${root}/about`, label: labels.about, exact: false },
    { href: `${root}/services`, label: labels.services, exact: false },
    { href: `${root}/projects`, label: labels.projects, exact: false },
    { href: `${root}/contact`, label: labels.contact, exact: false },
  ];
}

function MobileNavItem({ href, children, isActive, onClick }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          "block rounded-lg px-3 py-2 text-sm font-medium transition",
          isActive
            ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300"
            : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-600 dark:text-zinc-200 dark:hover:bg-zinc-800/70 dark:hover:text-orange-300"
        )}
      >
        {children}
      </Link>
    </li>
  );
}

function HamburgerButton({ isOpen, onClick, copy }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? copy.closeMenu : copy.menu}
      aria-expanded={isOpen}
      onClick={onClick}
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:ring-zinc-300 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <span className="relative h-4 w-5">
        <span
          className={clsx(
            "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-zinc-700 transition duration-200 ease-out dark:bg-zinc-200",
            isOpen && "translate-y-[7px] rotate-45 bg-orange-500 dark:bg-orange-400",
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-zinc-700 transition duration-150 ease-out dark:bg-zinc-200",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={clsx(
            "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-zinc-700 transition duration-200 ease-out dark:bg-zinc-200",
            isOpen && "-translate-y-[7px] -rotate-45 bg-orange-500 dark:bg-orange-400",
          )}
        />
      </span>
    </button>
  );
}

function MobileNavigation({
  navItems,
  pathname,
  isOpen,
  onToggle,
  onClose,
  copy,
  ...props
}) {
  return (
    <div className="relative" {...props}>
      <HamburgerButton isOpen={isOpen} onClick={onToggle} copy={copy} />
      <nav
        aria-label={copy.navigation}
        aria-hidden={!isOpen}
        className={clsx(
          "absolute right-0 top-12 w-56 origin-top-right overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/95 p-2 shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/5 backdrop-blur-sm transition duration-200 ease-out dark:border-zinc-700/70 dark:bg-zinc-900/95 dark:shadow-black/30 dark:ring-white/10",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0",
        )}
      >
        <ul className="space-y-1">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.href}
              href={item.href}
              isActive={isRouteActive(pathname, item.href, item.exact)}
              onClick={onClose}
            >
              {item.label}
            </MobileNavItem>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ href, children, isActive }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-orange-500 dark:text-orange-400"
            : "hover:text-orange-500 dark:hover:text-orange-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation({ navItems, pathname, ...props }) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            isActive={isRouteActive(pathname, item.href, item.exact)}
          >
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function ThemeToggle({ locale }) {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    let frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={getThemeToggleLabel(locale, otherTheme, mounted)}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-orange-50 [@media(prefers-color-scheme:dark)]:stroke-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-orange-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-orange-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-orange-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
    </button>
  );
}

function clamp(number, a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({ href = "/", large = false, className, ...props }) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
}

export function Header() {
  let pathname = usePathname();
  let locale = getCurrentLocale(pathname);
  let shellCopy = getShellCopy(locale);
  let navItems = getNavItems(locale);
  let homeHref = navItems[0].href;
  let isHomePage = isRouteActive(pathname, homeHref, true);
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const useHomeHeroAvatar = false;

  let headerRef = useRef(null);
  let avatarRef = useRef(null);
  let isInitial = useRef(true);

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }

      let { top, height } = headerRef.current.getBoundingClientRect();
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
        removeProperty("--avatar-top");
      } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
        setProperty("--avatar-top", "0px");
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage || !useHomeHeroAvatar) {
        return;
      }

      let fromScale = 1;
      let toScale = 36 / 64;
      let fromX = 0;
      let toX = 2 / 16;

      let scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      let borderScale = 1 / (toScale / scale);
      let borderX = (-toX + x) * borderScale;
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles);
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage, useHomeHeroAvatar]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && useHomeHeroAvatar && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{
                position: "var(--header-position)",
              }}
            >
              <div
                className="top-(--avatar-top,--spacing(3)) w-full"
                style={{
                  position: "var(--header-inner-position)",
                }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute top-3 left-0 origin-left transition-opacity"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  />
                  <Avatar
                    href={homeHref}
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: "var(--avatar-image-transform)" }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position: "var(--header-position)",
          }}
        >
          <Container
            className="top-(--header-top,--spacing(6)) w-full"
            style={{
              position: "var(--header-inner-position)",
            }}
          >
            <div className="relative flex items-center gap-4">
              <div className="flex flex-1">
                {(!isHomePage || !useHomeHeroAvatar) && (
                  <AvatarContainer>
                    <Avatar href={homeHref} />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation
                  navItems={navItems}
                  pathname={pathname}
                  isOpen={isMobileNavOpen}
                  onToggle={() => setIsMobileNavOpen((isOpen) => !isOpen)}
                  onClose={() => setIsMobileNavOpen(false)}
                  copy={shellCopy}
                  className="pointer-events-auto md:hidden"
                />
                <DesktopNavigation
                  navItems={navItems}
                  pathname={pathname}
                  className="pointer-events-auto hidden md:block"
                />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle locale={locale} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && useHomeHeroAvatar && (
        <div
          className="flex-none"
          style={{ height: "var(--content-offset)" }}
        />
      )}
    </>
  );
}
