import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess a sequence of digits <b><u>adding up to 25</u></b>.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        After each guess, the color of the tiles will
        change to show how close your guess is to the solution.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" status="correct" />
        <Cell value="7" />
        <Cell value="4" />
        <Cell value="9" />
        <Cell value="1" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 3 is in the solution and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="8" />
        <Cell value="5" status="present" />
        <Cell value="6" />
        <Cell value="4" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 5 is in the solution but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="5" />
        <Cell value="6" />
        <Cell value="4" />
        <Cell value="1" status="absent" />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 1 is not in the solution in any spot.
      </p>
    </BaseModal>
  )
}
