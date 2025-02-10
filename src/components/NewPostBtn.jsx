import "@/styles/NewPostBtn.css"
import useVector from "@/hooks/useVector"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function NewPostBtn() {
  const { addIc } = useVector();
  return (
    <Dialog>
      <DialogTrigger>
        <button className="new-post-btn border rounded-lg p-6 border-dashed flex flex-col items-center justify-center w-full h-full">
          <img src={addIc} alt="add new post" className="w-5 h-5" />
          <p className="new-post custom-pale-txt text-sm font-semibold mt-2">New Post</p>
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-max">
        <DialogHeader style={{ width: '631px' }}>
          <DialogTitle className="text-4xl mb-6 font-medium">New Post</DialogTitle>
          <h6 className="label custom-pale-txt text-lg font-medium pb-2">Post Title</h6>
          <input type="text" name="title" className="custom-input-txt h-10 py-2 px-4 outline-none border border-solid rounded w-full" placeholder="Give your post a title" />
          <h6 className="label custom-pale-txt text-lg font-medium pb-2 pt-6">Post Content</h6>
          <textarea name="body" id="" placeholder="Write something mind-blowing" className="custom-input-txt py-2 px-4 outline-none border border-solid rounded w-full h-44 resize-none"></textarea>
          <nav className="actions pt-6 flex flex-row gap-2 justify-end">
            <DialogClose>
              <button className="custom-pale-txt py-3 px-4 border-solid rounded border text-sm font-normal">Cancel</button>
            </DialogClose>
            <button className="publish py-3 px-4 rounded text-sm font-normal">Publish</button>
          </nav>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}