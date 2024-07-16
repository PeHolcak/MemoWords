interface ISwipe extends Document {
  fromUserId: Schema.Types.ObjectId;
  toUserId: Schema.Types.ObjectId;
  direction: 'like' | 'dislike';
  createdAt: Date;
}


const swipeSchema = new Schema<ISwipe>({
  fromUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  direction: { type: String, enum: ['like', 'dislike'], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Swipe = model<ISwipe>('Swipe', swipeSchema);