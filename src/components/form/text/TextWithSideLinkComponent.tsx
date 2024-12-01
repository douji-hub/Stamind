import Link from 'next/link'

type TextWithSideLinkComponentProps = {
  text: string
  link: string
  linkText: string
  handleResetPasswordMail?: () => void
}

const TextWithSideLinkComponent = (props: TextWithSideLinkComponentProps) => {
  const { text = '', link = '', linkText = '', handleResetPasswordMail } = props

  return (
    <div className={'w-full text-center text-xs text-stamind-grey-200'}>
      {text}
      <Link
        href={link}
        className="mx-1 underline"
        onClick={handleResetPasswordMail}
      >
        {linkText}
      </Link>
    </div>
  )
}

export default TextWithSideLinkComponent
