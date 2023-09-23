import Page from '@/components/page'
import { Input } from '@/components/input'
import Button from '@/components/button'

const CorporationSearch = () => {
  return <Page title="기업 정보 검색">
    <div className="flex flex-col">
      <div className="flex mt-2">
        <Input placeholder=" 기업명을 입력하세요."/>
        <Button>검색</Button>
      </div>
      <div>
        table 영역
      </div>
    </div>
  </Page>
}

export default CorporationSearch