import Link from "next/link";

type TextWithSideLinkComponentProps = {
  text: string;
  link: string;
  linkText: string;
}

const TextWithSideLinkComponent = (props: TextWithSideLinkComponentProps) => {
  const {
    text = "",
    link = "",
    linkText= "",
  } = props

  return (
    <div className={'w-full text-center text-xs text-lightgrey-stamind-lightgrey-200'}>
      {text}
      <Link href={link} className="mx-1 underline">
        {linkText}
      </Link>
    </div>
  )
}

export default TextWithSideLinkComponent
