// import { FMessage } from '@wu-web/fighting-design'
import { FMessage } from '@wu-web/fighting-design'

export const onCopy = (target: string): void => {
  navigator.clipboard.writeText(target)

  FMessage({ message: '复制成功', type: 'primary' })
}
