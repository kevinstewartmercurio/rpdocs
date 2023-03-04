import { forwardRef, Fragment, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'

// import { Button } from '@/components/Button'
// import { navigation } from '@/components/Navigation'

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <circle cx="10" cy="10" r="10" strokeWidth="0" />
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            />
        </svg>
    )
}

function FeedbackButton(props) {
    return (
        <button
            type="submit"
            className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            {...props}
        />
    )
}

const FeedbackForm = forwardRef(function FeedbackForm({ onSubmit }, ref) {
    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start"
        >
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Was this page helpful?
            </p>
            <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                <FeedbackButton data-response="yes">Yes</FeedbackButton>
                <div className="bg-zinc-900/10 dark:bg-white/10" />
                <FeedbackButton data-response="no">No</FeedbackButton>
            </div>
        </form>
    )
})

const FeedbackThanks = forwardRef(function FeedbackThanks(_props, ref) {
    return (
        <div
            ref={ref}
            className="absolute inset-0 flex justify-center md:justify-start"
        >
            <div className="flex items-center gap-3 rounded-full bg-red-50/50 py-1 pr-3 pl-1.5 text-sm text-red-900 ring-1 ring-inset ring-red-500/20 dark:bg-red-500/5 dark:text-red-200 dark:ring-red-500/30">
                <CheckIcon className="h-5 w-5 flex-none fill-red-500 stroke-white dark:fill-red-200/20 dark:stroke-red-200" />
                Thanks for your feedback!
            </div>
        </div>
    )
})

function Feedback() {
    let [submitted, setSubmitted] = useState(false)

    function onSubmit(event) {
        event.preventDefault()

        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"

        setSubmitted(true)
    }

    return (
        <div className="relative h-8">
            <Transition
                show={!submitted}
                as={Fragment}
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                leave="pointer-events-none duration-300"
            >
                <FeedbackForm onSubmit={onSubmit} />
            </Transition>
            <Transition
                show={submitted}
                as={Fragment}
                enterFrom="opacity-0"
                enterTo="opacity-100"
                enter="delay-150 duration-300"
            >
                <FeedbackThanks />
            </Transition>
        </div>
    )
}

// function PageLink({ label, page, previous = false }) {
//     return (
//         <>
//             <Button
//                 href={page.href}
//                 aria-label={`${label}: ${page.title}`}
//                 variant="secondary"
//                 arrow={previous ? 'left' : 'right'}
//             >
//                 {label}
//             </Button>
//             <Link
//                 href={page.href}
//                 tabIndex={-1}
//                 aria-hidden="true"
//                 className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
//             >
//                 {page.title}
//             </Link>
//         </>
//     )
// }

// function PageNavigation() {
//     let router = useRouter()
//     let allPages = navigation.flatMap((group) => group.links)
//     let currentPageIndex = allPages.findIndex(
//         (page) => page.href === router.pathname
//     )

//     if (currentPageIndex === -1) {
//         return null
//     }

//     let previousPage = allPages[currentPageIndex - 1]
//     let nextPage = allPages[currentPageIndex + 1]

//     if (!previousPage && !nextPage) {
//         return null
//     }

//     return (
//         <div className="flex">
//             {previousPage && (
//                 <div className="flex flex-col items-start gap-3">
//                     <PageLink label="Previous" page={previousPage} previous />
//                 </div>
//             )}
//             {nextPage && (
//                 <div className="ml-auto flex flex-col items-end gap-3">
//                     <PageLink label="Next" page={nextPage} />
//                 </div>
//             )}
//         </div>
//     )
// }

function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 30 30" width="20px" height="20px" aria-hidden="true" {...props}>    
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/>
        </svg>
    )
}

function InstagramIcon(props) {
    return (
        <svg viewBox="0 0 30 30" width="20px" height="20px" aria-hidden="true" {...props}>    
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/>
        </svg>
    )
}
 
function TwitterIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
        </svg>
    )
}

function YouTubeIcon(props) {
    return (
        <svg viewBox="0 0 50 50" width="20px" height="20px" aria-hidden="true" {...props}>
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/>
        </svg>
    )
}

function SocialLink({ href, icon: Icon, children }) {
    return (
        <Link href={href} className="group" target="_blank" rel="noreferrer">
            <span className="sr-only">{children}</span>
            <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
        </Link>
    )
}

function SmallPrint() {
    return (
        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
                &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex gap-4">
                <SocialLink href="https://www.facebook.com/RenaissancePeriodization/" icon={FacebookIcon}>
                    Follow us on Facebook
                </SocialLink>
                <SocialLink href="https://www.instagram.com/rpstrength/" icon={InstagramIcon}>
                    Follow us on Instagram
                </SocialLink>
                <SocialLink href="https://twitter.com/RPstrength" icon={TwitterIcon}>
                    Follow us on Twitter
                </SocialLink>
                <SocialLink href="https://www.youtube.com/channel/UCfQgsKhHjSyRLOp9mnffqVg" icon={YouTubeIcon}>
                    Follow us on YouTube
                </SocialLink>
                {/* <SocialLink href="#" icon={GitHubIcon}>
                    Follow us on GitHub
                </SocialLink>
                <SocialLink href="#" icon={DiscordIcon}>
                    Join our Discord server
                </SocialLink> */}
            </div>
        </div>
    )
}

export function Footer() {
    let router = useRouter()

    return (
        <footer className="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
            <Feedback key={router.pathname} />
            {/* <PageNavigation /> */}
            <SmallPrint />
        </footer>
    )
}
