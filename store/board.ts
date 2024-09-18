import type { QSelectOption } from 'quasar'
import type { BoardColumn } from '~/application/types/app/boardColumn'
import { StoreKey } from '~/application/types/app/store'
import type { BoardCard, ChosenCard } from '~/application/types/app/boardCard'
import isisEqualObjectValues from '~/application/helpers/isEqualObjectValues'
import { MOCK_BOARD_DATA } from '~/application/api/constans'

export const useBoardStore = defineStore(StoreKey.Board, () => {
  const boardColumns = ref<BoardColumn[]>(MOCK_BOARD_DATA)
  const chosenCard = ref<ChosenCard>() as ChosenCard

  const isCardModalVisible = ref<boolean>(false)

  const getColumnsStatusOptions = computed<QSelectOption<number>>(() => {
    return boardColumns.value.map((column: BoardColumn) => {
      return {
        value: column.id,
        label: column.title
      }
    })
  })

  function updateBoardColumns (newBoardColumns: BoardColumn[]) {
    boardColumns.value = newBoardColumns
  }

  function addColumn (name: string) {
    boardColumns.value.push({
      id: Date.now(),
      title: name,
      cards: []
    })
  }

  function addCard (columnId: number, cardName: string) {
    boardColumns.value.find(column => column.id === columnId)?.cards.push({
      id: Date.now(),
      title: cardName,
      description: '',
      assigned: null,
      priority: null,
      participants: []
    })
  }

  function handleCardModalShow (columnId: number, card: BoardCard) {
    isCardModalVisible.value = true

    chosenCard.value = {
      columnStatusId: columnId,
      ...card
    }
  }

  function getCardStatus (statusId: number) {
    return boardColumns.value.find(column => column.id === statusId)?.title || 'None'
  }

  function handleCardEdit () {
    const originalCard = boardColumns.value
      .find(column => column.id === chosenCard.value.columnStatusId)?.cards
      .find(card => card.id === chosenCard.value.id)

    delete chosenCard.value.columnStatusId

    if (!isEqualObjectValues(chosenCard.value, originalCard)) {
      Object.assign(originalCard, chosenCard.value)
    }
  }

  function handleCardDelete () {
    const currentCardColumn = boardColumns.value
      .find(column => column.id === chosenCard.value.columnStatusId)

    const deletingCardIndex = currentCardColumn?.cards
      .findIndex(card => card.id === chosenCard.value.id)

    currentCardColumn?.cards.splice(deletingCardIndex, 1)
  }

  function handleUpdateCardStatus (newStatusId: number) {
    handleCardDelete()

    const newCardColumn = boardColumns.value
      .find(column => column.id === newStatusId)

    delete chosenCard.value?.columnStatusId

    newCardColumn?.cards.unshift({
      ...chosenCard.value
    })

    chosenCard.value.columnStatusId = newStatusId
  }

  return {
    boardColumns,
    isCardModalVisible,
    chosenCard,
    getColumnsStatusOptions,
    updateBoardColumns,
    handleCardModalShow,
    addColumn,
    addCard,
    handleCardEdit,
    getCardStatus,
    handleCardDelete,
    handleUpdateCardStatus
  }
})
