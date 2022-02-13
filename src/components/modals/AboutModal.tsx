import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">

          This is a <i>math-themed</i> clone of
          {' '}
          <a href="https://www.powerlanguage.co.uk/wordle/" className="underline font-bold">Wordle</a>.
        </p>
        <p className="text-sm text-gray-500">
          Source code is
          {' '}
          <a href="https://github.com/saliola/numble25" className="underline font-bold">available on github</a>;
          it is based on the
          {' '}
          <a href="https://github.com/hannahcode/wordle" className="underline font-bold">the open source clone react-wordle</a>.
          {' '}
      </p>
    </BaseModal>
  )
}
