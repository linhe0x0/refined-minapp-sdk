export function promisify<TResult>(
  fn: (data: Record<string, any>) => void
): (data: Record<string, any>) => Promise<TResult> {
  return (data: Record<string, any>): Promise<TResult> => {
    return new Promise<TResult>((resolve, reject) => {
      const handleSuccess = (result: TResult) => {
        resolve(result)

        if (data.success) {
          data.success(result)
        }
      }

      const handleFail = (err: Error) => {
        reject(err)

        if (data.fail) {
          data.fail(err)
        }
      }

      const payload = Object.assign({}, data, {
        success: handleSuccess,
        fail: handleFail,
      })

      fn(payload)
    })
  }
}
