import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { useState } from 'react'
type Props = {
  game: Game
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ game }: Props) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(true)

  const click = () => {
    dispatch(adicionar(game))
    setCheck(false)
  }

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{check ? '' : '✔️'}</S.Tag>
        <img src={game.imagem} alt={game.nome} />
      </S.Capa>
      <S.Titulo>{game.nome.split(' ').slice(0, 3).join(' ')}</S.Titulo>
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => click()} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
