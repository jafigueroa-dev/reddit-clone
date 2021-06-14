import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Upvote } from "./Upvote";
import { User } from "./User";

// 'Post' object handles the data storage of each post
@ObjectType()
@Entity()
export class Post extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	text!: string;

	@Field()
	@Column({ type: "int", default: 0 })
	points!: number;

	@Field(() => Int, { nullable: true })
	voteStatus: number | null;

	@Field()
	@Column()
	creatorId: number;

	@Field()
	@ManyToOne(() => User, user => user.posts)
	creator: User;

	@OneToMany(() => Upvote, upvote => upvote.post)
	upvotes: Upvote[];

	@Field(() => String)
	@CreateDateColumn()
	createAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updateAt: Date;
}