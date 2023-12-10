interface CommonErrorScreenProps {
  error: Error;
}

// TODO: 의도되지 않은 에러에 대한 공통 스크린 정의 (404, 400, 500 등은 에러 페이지로 구현)
const CommonErrorScreen = ({ error }: CommonErrorScreenProps) => {
  if (!error) {
    window.location.reload();
  }

  return <>{JSON.stringify(error)}</>;
};

export default CommonErrorScreen;
