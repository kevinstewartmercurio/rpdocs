import Image from "next/image"

export function Logo(props) {
    return (
        <Image
            src="/images/rp1.png"
            alt="rp"
            width={99}
            height={24}
            priority
        />
    )
}
